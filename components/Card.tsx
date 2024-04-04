import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { CarouselDemo } from "./Carousel";
import { SliderDemo } from "./Slider";

export function CardWithForm() {
	return (
		<Card className="w-[200px]">
			<CardHeader>
				<CardTitle>درصد چربی بدن</CardTitle>
				<CardDescription>
					نزدیکترین تصویر به بدن خود را انتخاب نمایید.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<CarouselDemo />
				<div className="flex justify-center items-center p-5">
					<Checkbox />
				</div>
				<SliderDemo/>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline" className="w-full">تایید و ادامه</Button>
			</CardFooter>
		</Card>
	);
}
