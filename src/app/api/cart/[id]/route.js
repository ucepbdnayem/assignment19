import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
	const id = req.url.split("cart/")[1];
	const result = await prisma.cart.findUnique({
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
		const id = req.url.split("cart/")[1];
		const reqBody = await req.json();

		const result = await prisma.cart.update({
			where: {
				id: id,
			},
			data: {
				"title"     : reqBody["title"],
				"sessionId" : reqBody["sessionId"],
				"token"     : reqBody["token"],
				"status"    : reqBody["status"],
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
		const id = req.url.split("cart/")[1];
		const result = await prisma.cart.delete({
			where: {
				id: id,
			}
		});
		
		return NextResponse.json({ status: "Success", result: "Delete cart successfully" });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
