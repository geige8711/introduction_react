"use client";

import { blogs } from "../../../_lib/blogData/blogs";
import PageContainer from "../../components/PageContainer";
import { useParams } from "next/navigation";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function Page() {
    const { slug } = useParams();

    if (!slug) {
        return <div>PAGE NOT FOUND</div>;
    }

    const data = blogs[slug as string];

    if (!data) {
        return <div>PAGE NOT FOUND</div>;
    }

    return (
        <PageContainer>
            <Accordion allowMultiple className="flex flex-col gap-y-8">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        header={
                            <div className="text-2xl font-semibold">
                                {item.q}
                            </div>
                        }
                    >
                        <div className="text-lg my-2">{item.a}</div>
                        <a href={item.r} className="text-sm underline">
                            {item.r}
                        </a>
                    </AccordionItem>
                ))}
            </Accordion>
        </PageContainer>
    );
}
