import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
	const id = req.url.split("user/")[1];
	const result = await prisma.user.findUnique({
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
		const id = req.url.split("user/")[1];
		const reqBody = await req.json();

		const result = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				"firstName"     : reqBody["firstName"],
				"middleName"    : reqBody["middleName"],
				"lastName"      : reqBody["lastName"],
				"mobile"        : reqBody["mobile"],
				"email"         : reqBody["email"],
				"password"      : reqBody["password"],
        "admin"         : reqBody["admin"],
				"registeredAt"  : new Date(reqBody["registeredAt"]).toISOString(),
				"lastLogin"     : new Date(reqBody["lastLogin"]).toISOString(),
				"createAt"      : new Date(reqBody["createAt"]).toISOString(),
				"updateAt"      : new Date(reqBody["updateAt"]).toISOString()
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
		const id = req.url.split("user/")[1];
		const result = await prisma.user.delete({
			where: {
				id: id,
			}
		});
		
		return NextResponse.json({ status: "Success", result: "Delete user successfully" });
	} catch (err) {
		return NextResponse.json({ status: "Fail", result: err.toString() });
	}
}
