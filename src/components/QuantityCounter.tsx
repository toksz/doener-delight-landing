import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface QuantityCounterProps {
  onChange?: (quantity: number) => void;
  initialValue?: number;
}

export const QuantityCounter = ({ onChange, initialValue = 1 }: QuantityCounterProps) => {
  const [quantity, setQuantity] = useState(initialValue);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full hover:bg-primary/10"
        onClick={() => updateQuantity(quantity - 1)}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full hover:bg-primary/10"
        onClick={() => updateQuantity(quantity + 1)}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};