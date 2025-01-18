import { Info } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { QuantityCounter } from "./QuantityCounter";

interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  isPopular?: boolean;
  isNew?: boolean;
  allergies?: string[];
  soldOut?: boolean;
}

export const MenuItem = ({
  name,
  price,
  description,
  isPopular,
  isNew,
  allergies,
  soldOut,
}: MenuItemProps) => {
  return (
    <div className="menu-item group relative">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="menu-item-name">{name}</h3>
          {isPopular && (
            <Badge variant="secondary" className="bg-orange-500 text-white">
              BELIEBT
            </Badge>
          )}
          {isNew && (
            <Badge variant="secondary" className="bg-green-500 text-white">
              NEU
            </Badge>
          )}
          {allergies && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">Allergene:</p>
                <p className="text-sm">{allergies.join(", ")}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        {description && (
          <p className="menu-item-description">{description}</p>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="menu-item-price">{price}€</span>
        {!soldOut && <QuantityCounter />}
        {soldOut && (
          <Badge variant="destructive" className="opacity-80">
            Ausverkauft
          </Badge>
        )}
      </div>
    </div>
  );
};