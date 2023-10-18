import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  const prisma = new PrismaClient();
  try {
    let resultw = await prisma.product.groupBy({
      by: ["userId"],
      _avg: { price: true },
      _count: { id: true },
      _max: { price: true },
      _sum: { price: true },
    });
    return NextResponse.json({ status: "fail", resultw });

  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}

