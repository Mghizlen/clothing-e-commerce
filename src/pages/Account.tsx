import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

export default function Account() {
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8">My Account</h1>

        <div className="bg-muted p-8 rounded-lg text-center">
          <p className="text-muted-foreground mb-6">Sign in to manage your account, view orders, and more.</p>
          <div className="space-y-4 max-w-sm mx-auto">
            <Button variant="primary" size="lg" className="w-full">
              Sign In
            </Button>
            <Button variant="ghost" size="lg" className="w-full">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
