export default function TimerDigit({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <span id="days" className="flex flex-col items-center">
      <span className="text-xtreme-super-large md:text-xtreme-extra-large lg:text-xtreme-super-large font-bold">{value}</span>{" "}
      <span className="text-xtreme-medium md:text-xtreme-small lg:text-xtreme-medium text-xtreme-orange font-semibold">
        {label}
      </span>
    </span>
  );
}
