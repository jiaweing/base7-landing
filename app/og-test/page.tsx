import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OGTestPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">OG Image Test</h1>
      
      <div className="grid gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Default OG Image</h2>
          <div className="relative aspect-[1200/630] w-full max-w-3xl border border-gray-200 rounded-lg overflow-hidden mb-4">
            <Image 
              src="/api/og" 
              alt="Default OG Image" 
              fill
              className="object-cover"
            />
          </div>
          <Button asChild>
            <Link href="/api/og" target="_blank">View Full Size</Link>
          </Button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Custom Title OG Image</h2>
          <div className="relative aspect-[1200/630] w-full max-w-3xl border border-gray-200 rounded-lg overflow-hidden mb-4">
            <Image 
              src="/api/og?title=Custom%20Title%20Example" 
              alt="Custom Title OG Image" 
              fill
              className="object-cover"
            />
          </div>
          <Button asChild>
            <Link href="/api/og?title=Custom%20Title%20Example" target="_blank">View Full Size</Link>
          </Button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Fully Customized OG Image</h2>
          <div className="relative aspect-[1200/630] w-full max-w-3xl border border-gray-200 rounded-lg overflow-hidden mb-4">
            <Image 
              src="/api/og?title=Fully%20Customized%20Example&subtitle=with%20custom%20subtitle&tagline=This%20is%20a%20custom%20tagline%20for%20testing" 
              alt="Fully Customized OG Image" 
              fill
              className="object-cover"
            />
          </div>
          <Button asChild>
            <Link href="/api/og?title=Fully%20Customized%20Example&subtitle=with%20custom%20subtitle&tagline=This%20is%20a%20custom%20tagline%20for%20testing" target="_blank">View Full Size</Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
