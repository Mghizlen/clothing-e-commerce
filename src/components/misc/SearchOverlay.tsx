import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { Input } from '../ui/Input';

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label="Search"
      >
        <Icon name="search" size="md" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl mx-auto mt-20 px-4"
          >
            <div className="bg-card rounded-lg shadow-xl">
              <div className="p-6 border-b border-muted">
                <Input
                  autoFocus
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="p-6 text-center text-muted-foreground">
                {query ? 'Search results for: ' + query : 'Start typing to search...'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
