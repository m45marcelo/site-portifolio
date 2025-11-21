import { useEffect, useState } from "react";

export function useSectionObserver(sectionIds: string[]) {
	const [activeSection, setActiveSection] = useState<string>("home");

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (!element) return;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveSection(id);
						}
					});
				},
				{
					threshold: 0.5, // 50% da section precisa aparecer
				}
			);

			observer.observe(element);
			observers.push(observer);
		});

		// Cleanup
		return () => {
			// biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
			observers.forEach((observer) => observer.disconnect());
		};
	}, [sectionIds]);

	return activeSection;
}
