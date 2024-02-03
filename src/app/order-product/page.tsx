"use client";
import {useRouter} from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();
	const handleClick = () => {
		console.log("Placing your order");
		router.push("/");
		// router.replace("/");
		// router.back();
		// router.forward();
	}
	return (
		<>
			<h1>OrderProduct</h1>
			<button onClick={handleClick}>Place Order</button>
		</>
	);
}