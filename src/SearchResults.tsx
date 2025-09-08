import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Utility to get query param from URL
function useQueryParam(key: string): string {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
}

const SearchResults: React.FC = () => {
  const { t } = useTranslation();
  const initialSearch = useQueryParam("search");
  const [search, setSearch] = useState(initialSearch);

  const updateSearch = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("search", search);
    window.location.href = `${window.location.pathname}?${params}`;
  };

  return (
    <div
      style={{
        width: "95vw",
        fontFamily: "system-ui, Arial",
        background: "#f4f8fb",
        borderRadius: 24,
        boxShadow: "0 4px 32px #0002",
        padding: "2.5rem 2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          marginBottom: "2rem",
          color: "#222",
        }}
      >
        Super Search
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchPlaceholder")}
          style={{
            fontSize: "1.3rem",
            padding: "0.8rem 1.2rem",
            borderRadius: 8,
            border: "1px solid #b0c4de",
            width: 400,
            marginRight: 16,
            outline: "none",
          }}
        />
        <button
          onClick={updateSearch}
          style={{
            fontSize: "1.3rem",
            padding: "0.8rem 2rem",
            borderRadius: 8,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px #1976d233",
          }}
        >
          {t("searchButton")}
        </button>
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        {t("searchResultSummary", {
          search: <strong>{initialSearch}</strong>,
        })}
      </h2>
    </div>
  );
};

export default SearchResults;
