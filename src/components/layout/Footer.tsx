
import { Link } from 'react-router-dom';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-muted mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Champagne Noir</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Luxury crafted essentials for the discerning eye. Timeless pieces, exceptional quality.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fg transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe for exclusive updates and early access.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 text-sm border border-muted text-fg placeholder-muted-foreground focus:outline-none"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm hover:bg-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Champagne Noir. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-fg transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-fg transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
