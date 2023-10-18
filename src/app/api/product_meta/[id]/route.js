import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
	const id = req.url.split("product_meta/")[1];
	const result = await prisma.product_meta.findUnique({
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
		const id = req.url.split("product_meta/")[1];
		const reqBody = await req.json();

		const result = await prisma.product_meta.update({
			where: {
				id: id,
			},
			data: {
				"key"      : reqBody["key"],
        "content"  : reqBody["content"],
        "productId": reqBody["productId"],
        "createAt" : new Date(reqBody["createAt"]).toISOString(),
        "updateAt" : new Date(reqBody["updateAt"]).toISOString()
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
		const id = req.url.split("product_meta/")[1];
		const result = await prisma.product_meta.delete({
			where: {
				id: id,
			}
		});
		
		return NextResponse.json({ status: "Success", result: "Delete product meta successfully" });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
