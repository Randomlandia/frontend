import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default withClerkMiddleware((req) => {
  return NextResponse.next();
});

export const config = {
<<<<<<< HEAD
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
=======
  matcher: '/((?!_next/image|_next/static|favicon.ico).*)',
>>>>>>> cfeb392 (fix: middleware.ts file)
};