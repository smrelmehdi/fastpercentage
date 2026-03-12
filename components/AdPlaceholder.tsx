interface AdPlaceholderProps {
  variant?: "banner" | "rectangle" | "responsive";
}

export default function AdPlaceholder({ variant = "responsive" }: AdPlaceholderProps) {
  // Hidden until AdSense verification is complete
  return null;
  if (variant === "rectangle") {
    return (
      <div className="my-10 flex justify-center">
        <div className="flex h-[250px] w-[300px] items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white shadow-sm">
          <p className="text-xs uppercase tracking-widest text-gray-300">
            Advertisement
          </p>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="my-10 flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white shadow-sm">
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Advertisement
        </p>
      </div>
    );
  }

  // responsive – full width on mobile, auto height; best performer on mobile
  return (
    <div className="my-8 w-full overflow-hidden rounded-xl border border-dashed border-gray-200 bg-white shadow-sm" style={{ minHeight: 100 }}>
      <div className="flex min-h-[100px] items-center justify-center">
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Advertisement
        </p>
      </div>
      {/* Replace the div above with AdSense ins tag:
          data-ad-format="auto" data-full-width-responsive="true" */}
    </div>
  );
}
