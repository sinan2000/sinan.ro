'use client';
import dynamic from 'next/dynamic';

const SNSFooter = dynamic(() => import('@/components/sns/footer'), { ssr: false })

export default function ClientFooter() {
  return <SNSFooter />;
}