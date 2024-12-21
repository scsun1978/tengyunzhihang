import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import type { NewsFilter } from '../types';

interface NewsFilterProps {
  onFilter: (filter: NewsFilter) => void;
}

const categories = ['全部', '公司新闻', '产品动态', '技术创新'];

export function NewsFilter({ onFilter }: NewsFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: ''
  });

  const handleFilter = () => {
    const filter: NewsFilter = {};
    if (selectedCategory !== '全部') {
      filter.category = selectedCategory;
    }
    if (dateRange.start && dateRange.end) {
      filter.dateRange = {
        start: new Date(dateRange.start),
        end: new Date(dateRange.end)
      };
    }
    onFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
      >
        <Filter className="w-5 h-5" />
        筛选
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">筛选条件</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">分类</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">日期范围</h4>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="px-3 py-2 border rounded-md"
                />
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setSelectedCategory('全部');
                  setDateRange({ start: '', end: '' });
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                重置
              </button>
              <button
                onClick={handleFilter}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                应用筛选
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}