import {
  CategoryPreviewContainer,
  CategoryPreviewWindow,
  CategoryTitleLink,
} from "./category-preview.styles.jsx";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={title}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <CategoryPreviewWindow>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewWindow>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
