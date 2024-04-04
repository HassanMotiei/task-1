import { CardWithForm } from "@/components/Card";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div className="flex justify-center items-center gap-2">
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
			</div>
		</div>
	);
}
