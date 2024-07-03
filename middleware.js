export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/dashboard', '/claims', '/claims/:id*', '/payments', '/calendar', '/profile', '/dashboard' , '/overview', '/claims-manager', '/compliance-report', '/notifications', '/support']
};