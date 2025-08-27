import { IncrementComponent } from "../../IncrementComponent";

type IncrementComponentTestProps = {
  productQuantity: number;
  product: string;
};

export function IncrementComponentTest({
  productQuantity,
  product,
}: IncrementComponentTestProps) {
  return (
    <IncrementComponent productQuantity={productQuantity} product={product} />
  );
}
