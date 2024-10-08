import { Request, Response } from "express";
import { crawlerService } from "../services/crawler.service";
import { title } from "process";

export const crawlerController = {
    updateRequestCrawler: async (req: Request, res: Response) => {
        try {
            const { status, user_plan_id } = req.body;
            const crawlerStatus = await crawlerService.checkCrawlerStatus(
                user_plan_id
            );
            if (crawlerStatus?.require_crawler == true) {
                return await res.status(403).json({
                    data: "sorry you can't cancell your request.",
                });
            } else {
                const crawler = await crawlerService.updateCrawler(
                    status,
                    user_plan_id
                );
                return await res.status(200).json({
                    data: crawler,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Internal error.",
            });
        }
    },
    newProductFromJson: async (req: Request, res: Response) => {
        try {
            const { upid } = req.params;
            const products = req.body;

            let newProduct = [];
            for (let i = 0; i < products.length; i++) {
                const {
                    title,
                    price,
                    specs,
                    full_specs,
                    brand,
                    url,
                    image,
                    category_title,
                } = products[i];
                const product = await crawlerService.newProductFromJson(
                    title,
                    price,
                    specs,
                    brand,
                    full_specs || "",
                    url,
                    image,
                    category_title,
                    Number(upid)
                );
                newProduct.push(product);
            }
            res.status(200).json({
                data: { newProductCount: newProduct.length },
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Internal error.",
            });
        }
    },
    getUserPlans: async (req: Request, res: Response) => {
        try {
            const userPlans = await crawlerService.getUserPlanDetails();
            const header = req.headers["access-key"];
            if (header == process.env.ACCESS_KEY) {
                return res.status(200).json({
                    data: userPlans,
                });
            } else {
                return res.status(403).json({
                    data: "permission denied.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },
};
