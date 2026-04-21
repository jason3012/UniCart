import { SignJWT, jwtVerify } from 'jose'

const secret = () => new TextEncoder().encode(process.env.AUTH_SECRET!)

export async function createExtensionToken(userId: string, email?: string | null): Promise<string> {
  return new SignJWT({ email: email ?? '' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(userId)
    .setExpirationTime('30d')
    .sign(secret())
}

export async function verifyExtensionToken(token: string): Promise<string> {
  const { payload } = await jwtVerify(token, secret())
  if (!payload.sub) throw new Error('Invalid token')
  return payload.sub
}
