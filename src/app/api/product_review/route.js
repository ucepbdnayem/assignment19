import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
	try {
	    let result = await prisma.product_review.findMany();
	    return NextResponse.json({ status: "Success", result: result });
	} catch (err) {
	    return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
export async function POST(req, res) {
	BigInt.prototype.toJSON = function () {
		return this.toString();
	};
	try {
		const reqBody = await req.json();
		console.log(reqBody)
		const result = await prisma.product_review.create({
			data: {
				"title"    : reqBody["title"],
        "rating"   : reqBody["rating"],
        "content"  : reqBody["content"],
        "productId": reqBody["productId"],
        "createAt" : new Date(reqBody["createAt"]).toISOString(),
        "updateAt" : new Date(reqBody["updateAt"]).toISOString() 
			}
		});
		
		return NextResponse.json({ status: "Success", result: result });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
