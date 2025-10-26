'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ReportData {
  current_status: string;
  other: {
    email: string;
    subject: string;
    details?: string;
  };
}

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [reportStatus, setReportStatus] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchReportStatus = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/report?id=${id}`);
        const data = await res.json();
        if (data?.current_status && data?.other) {
          setReportStatus(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch report status:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReportStatus();
    }
  }, [id]);

  const renderStatus = (): string | ReportData => {
    if (loading) return 'Loading...';
    if (error) return 'Failed to load';
    return reportStatus!;
  };

  const status = renderStatus();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mt-16">Report Status</h1>
      <p className="text-justify tracking-wider my-4">
        Report status at a glance.
      </p>
      <div className="bg-[rgba(217,217,217,0.05)] border border-[rgba(84,84,87,0.6)] shadow-[0_4px_8px_rgba(0,0,0,0.25)] rounded-xl p-6 -mx-4">
        <div>
          <span className="text-[#8B8B8B] text-sm font-bold">Current Status</span>
          <h3 className="text-[#CFCFCF] text-xl">
            {typeof status === 'string' ? status : status.current_status}
          </h3>
        </div>
        <div className='mt-4'>
          <span className="text-[#8B8B8B] text-sm font-bold ">Your Email</span>
          <h3 className="text-[#CFCFCF] text-xl">
            {typeof status === 'string' ? status : status.other.email}
          </h3>
        </div>
        <div className='mt-4'>
          <span className="text-[#8B8B8B] text-sm font-bold ">Subject</span>
          <h3 className="text-[#CFCFCF] text-xl">
            {typeof status === 'string' ? status : status.other.subject}
          </h3>
        </div>
      </div>
      <button className="bg-[#A81A26] block rounded-xl py-2 px-10 mx-auto my-6">Cancel</button>
    </main>
  );
}
