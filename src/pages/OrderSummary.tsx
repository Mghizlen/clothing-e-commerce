import React from 'react';
import { Container } from '../components/layout/Container';

export default function OrderSummary() {
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-4xl font-bold mb-6">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. We'll send you a confirmation email shortly.
        </p>
        <p className="text-muted-foreground">Order #123456</p>
      </div>
    </Container>
  );
}
