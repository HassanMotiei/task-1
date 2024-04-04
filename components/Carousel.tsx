import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

import { cardData } from "@/app/data";

export function CarouselDemo() {
	return (
		<div className="flex justify-center items-center">
			<Carousel className="w-[50%] max-w-xs">
				<CarouselContent>
					{cardData.map((data) => (
						<CarouselItem key={data.id}>
							<div className="p-1">
								<Card className="border-0">
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<Image
											src={data.ImgSrc}
											alt={data.title}
											fill
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="text-lg text-gray-600 cursor-pointer" />
				<CarouselNext className="text-lg text-gray-600 cursor-pointer" />
			</Carousel>
		</div>
	);
}
