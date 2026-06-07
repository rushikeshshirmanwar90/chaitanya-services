"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, RefreshCw } from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  phoneNumber: number;
  packageCategory?: string;
  packageName?: string;
}

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead");
      const data = await res.json();
      setLeads(Array.isArray(data) ? data : []);
    } catch {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    await fetch(`/api/lead?id=${id}`, { method: "DELETE" });
    await load();
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <p className="text-sm text-slate-500">Booking enquiries submitted from the site.</p>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
            {leads.length} total
          </span>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`mr-1 h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
        </Button>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
        {loading ? (
          <p className="px-4 py-6 text-slate-500">Loading leads…</p>
        ) : leads.length === 0 ? (
          <div className="px-6 py-14 text-center">
            <p className="text-sm font-medium text-slate-600">No leads yet</p>
            <p className="mt-1 text-sm text-slate-400">
              Enquiries from the booking form will appear here.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">Name</TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">Category</TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">Package</TableHead>
                <TableHead className="text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead._id} className="hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-800">{lead.name}</TableCell>
                  <TableCell className="text-slate-600">{lead.phoneNumber}</TableCell>
                  <TableCell>
                    {lead.packageCategory ? (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {lead.packageCategory}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-slate-600">{lead.packageName || <span className="text-slate-400">—</span>}</TableCell>
                  <TableCell className="text-right">
                    <button
                      type="button"
                      className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                      onClick={() => deleteLead(lead._id)}
                      title="Delete lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
