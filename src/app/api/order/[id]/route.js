import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
	const id = req.url.split("order/")[1];
	const result = await prisma.order.findUnique({
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
		const id = req.url.split("order/")[1];
		const reqBody = await req.json();

		const result = await prisma.order.update({
			where: {
				id: id,
			},
			data: {
				"title"     : reqBody["title"],
        "token"     : reqBody["token"],
        "subTotal"  : reqBody["subTotal"],
        "itemDiscount": reqBody["itemDiscount"],
        "tax"       : reqBody["tax"],
        "total"     : reqBody["total"],
        "discount"  : reqBody["discount"],
        "grandTotal": reqBody["grandTotal"],
        "firstName" : reqBody["firstName"],
        "middleName": reqBody["middleName"],
        "lastName"  : reqBody["lastName"],
        "mobile"    : reqBody["mobile"],
        "email"     : reqBody["email"],
        "city"      : reqBody["city"], 
        "country"   : reqBody["country"],
        "userId"    : reqBody["userId"],
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
		const id = req.url.split("order/")[1];
		const result = await prisma.order.delete({
			where: {
				id: id,
			}
		});
		
		return NextResponse.json({ status: "Success", result: "Delete order successfully" });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}