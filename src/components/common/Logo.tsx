import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <div>
          <div>
            <ShoppingCart />
          </div>

          {/* text logo */}

          <div>
            <h2>SwiftCart</h2>
          </div>
        </div>
      </div>

      
    </Link>
  );
};

export default Logo;
