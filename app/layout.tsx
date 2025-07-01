export const metadata = {
  title: "LaunchPilot - AI Launch Consultant",
  description: "Transform your raw idea into a revenue-generating product or course with AI-powered launch consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
