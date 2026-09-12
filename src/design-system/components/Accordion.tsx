import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpandedId?: string;
  variant?: 'bordered' | 'flush' | 'dark';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpandedId,
  variant = 'bordered',
  className = '',
}) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(
    defaultExpandedId ? [defaultExpandedId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isDark = variant === 'dark';
  const isFlush = variant === 'flush';

  const containerClasses = isFlush
    ? `divide-y ${isDark ? 'divide-white/10' : 'divide-[#E5E7EB]'}`
    : `divide-y ${
        isDark
          ? 'divide-white/10 border border-white/10 bg-[#0B1C2F]'
          : 'divide-[#E5E7EB] border border-[#E5E7EB] bg-white'
      } rounded-[16px] overflow-hidden`;

  return (
    <div className={`${containerClasses} ${className}`} role="region" aria-label="Accordion">
      {items.map((item, index) => {
        const isExpanded = expandedIds.includes(item.id);

        return (
          <div key={item.id} className="transition-colors">
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
              className={`w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer ${
                isDark
                  ? 'hover:bg-white/[0.03] text-white'
                  : 'hover:bg-slate-50 text-[#0B1320]'
              }`}
            >
              <div className="space-y-1 pr-4">
                {item.category && (
                  <span
                    className={`typography-label text-[10px] block ${
                      isDark ? 'text-slate-400' : 'text-[#173C62]'
                    }`}
                  >
                    {item.category}
                  </span>
                )}
                <h3
                  className={`typography-h4 font-medium transition-colors ${
                    isExpanded
                      ? isDark
                        ? 'text-white'
                        : 'text-[#173C62]'
                      : isDark
                      ? 'text-slate-200'
                      : 'text-[#0B1320]'
                  }`}
                >
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p
                    className={`typography-body-sm text-xs ${
                      isDark ? 'text-slate-400' : 'text-[#64748B]'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>

              <div className="shrink-0 pt-1">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDark ? 'text-slate-400' : 'text-[#64748B]'
                  } ${isExpanded ? 'rotate-180 text-[#173C62]' : ''}`}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-5 pb-6 sm:px-6 sm:pb-7 pt-1 typography-body border-t ${
                      isDark
                        ? 'text-slate-300 border-white/10 bg-white/[0.02]'
                        : 'text-[#4A5568] border-[#E5E7EB]/60 bg-slate-50/50'
                    }`}
                  >
                    <div className="max-prose-editorial">{item.content}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
