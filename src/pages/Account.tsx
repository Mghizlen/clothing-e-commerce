import { useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export default function Account() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <Container className="py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">My Account</h1>

          <div className="bg-muted p-8 rounded-lg text-center">
            <p className="text-muted-foreground mb-6">Sign in to manage your account, view orders, and more.</p>
            <div className="space-y-4 max-w-sm mx-auto">
              <Button variant="primary" size="lg" className="w-full" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button variant="ghost" size="lg" className="w-full" onClick={() => navigate('/signup')}>
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-muted p-6 rounded-lg">
              <h2 className="font-heading text-2xl font-semibold mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <p className="text-lg">{user?.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg">{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-muted p-6 rounded-lg">
              <h2 className="font-heading text-2xl font-semibold mb-4">Order History</h2>
              <p className="text-muted-foreground">No orders yet</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white border border-muted p-6 rounded-lg">
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/wishlist')}>
                  My Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/cart')}>
                  My Cart
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-600" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
