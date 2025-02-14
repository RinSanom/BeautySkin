import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-muted/20 pt-20 pb-6 bg-slate-100 py-4">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="text-2xl font-serif text-pink-600 flex">
                <img
                  className="w-[50px]"
                  src="../src/assets/logo/logo.png"
                  alt=""
                />
                <p className="m-auto">SkinBeauty</p>
              </Link>
            </div>
            <div>
              <h3 className="font-medium mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/shop"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/makeup"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skincare"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Skin Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/aboutus"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t mt-5">
            <p>Copyright © 2024 BeautySkin | Powered by BeautySkin</p>
          </div>
        </div>
      </footer>
    </>
  );
}
