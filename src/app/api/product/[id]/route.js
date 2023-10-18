import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
	const id = req.url.split("product/")[1];
	const result = await prisma.product.findUnique({
		where: {
			id: id,
		},
	});
	if (!result) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
	return NextResponse.json({ status: "Success", result: result });
}
//
export async function PATCH(req, res) {
	try {
		const id = req.url.split("product/")[1];
		const reqBody = await req.json();

		const result = await prisma.product.update({
			where: {
				id: id,
			},
			data: {
				"firstName" : reqBody["firstName"],
        "metaTitle" : reqBody["metaTitle"],
        "slug"      : reqBody["slug"],
        "summary"   : reqBody["summary"],
        "price"     : reqBody["price"],
        "discount"  : reqBody["discount"], 
        "userId"    : reqBody["userId"],
        "publishedAt": new Date(reqBody["publishedAt"]).toISOString(),
        "startsAt"  : new Date(reqBody["startsAt"]).toISOString(),
        "endsAt"    : new Date(reqBody["endsAt"]).toISOString(),
        "createAt"  : new Date(reqBody["createAt"]).toISOString(),
        "updateAt"  : new Date(reqBody["updateAt"]).toISOString() 
			},
		});
		
		return NextResponse.json({ status: "Success", result: result });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
//
export async function DELETE(req, res) {
	try {
		const id = req.url.split("product/")[1];
		const result = await prisma.product.delete({
			where: {
				id: id,
			}
		});
		
		return NextResponse.json({ status: "Success", result: "Delete product successfully" });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
