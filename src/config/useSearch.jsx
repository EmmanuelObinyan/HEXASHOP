import { useState, useMemo } from "react";
import React from 'react'

export const useSearch=(data, mode = "partial")=> {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return data;

    const q = query.toLowerCase();

    switch (mode) {
      case "partial":
        return data.filter(p => p.productName.toLowerCase().includes(q));
      case "exact":
        return data.filter(p => p.productName.toLowerCase() === q);
      case "startsWith":
        return data.filter(p => p.productName.toLowerCase().startsWith(q));
      case "endsWith":
        return data.filter(p => p.productName.toLowerCase().endsWith(q));
      case "multiple": {
        const keywords = q.split(" ");
        return data.filter(p =>
          keywords.some(kw => p.productName.toLowerCase().includes(kw))
        );
      }
      case "regex": {
        const regex = new RegExp(query, "i");
        return data.filter(p => regex.test(p.productName));
      }
      default:
        return data;
    }
  }, [query, data, mode]);

  return { query, setQuery, results };
}
