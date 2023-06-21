export default function H1({ className = '', children }) {
  return <h1 className={`mt-4 mb-8 text-4xl font-semibold text-center ${className}`}>{children}</h1>;
}
