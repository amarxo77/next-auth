type AboutStatsProps = {
  heading: string;
  overview: string;
};

export default function AboutStats({ heading, overview }: AboutStatsProps) {
  return (
    <div className='space-y-1'>
      <h1 className='text-3xl text-blue-500'>{heading}</h1>
      <p>{overview}</p>
    </div>
  );
}
