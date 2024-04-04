import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
	return (
		<Slider
			defaultValue={[16.66]}
			max={100}
			step={16.66}
			className={cn("w-[100%]", className)}
			{...props}
		/>
	);
}
