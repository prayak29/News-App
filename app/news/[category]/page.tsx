import React from "react";
import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="text-4xl font-serif capitalize px-0 pt-5 underline decoration-orange-400 decoration-2 underline-offset-4 decoration-double pb-4">
        {category}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
