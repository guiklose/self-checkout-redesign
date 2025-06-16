import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  const filePath = path.join(process.cwd(), 'data.json');
  const file = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(file);

  const product = products.find((p: { code: string }) => p.code === code);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}