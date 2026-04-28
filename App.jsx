import { startTransition, useEffect, useState } from "react";
import {
  checklistOptions,
  documentChecklists,
  eligibilityRecommendations,
  eligibilityQuestions,
  featureCards,
  impactItems,
  languageOptions,
  learningModules,
  notices,
  services,
  trackerSeeds,
  translations
} from "./content.js";

const stats = [
  { number: "12+", key: "statOne" },
  { number: "3", key: "statTwo" },
  { number: "24/7", key: "statThree" }
];

const STORAGE_KEYS = {
  language: "janconnect-language",
  tracker: "janconnect-tracker",
  favorites: "janconnect-favorites",
  checklist: "janconnect-checklist"
};

function loadStoredValue(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [language, setLanguage] = useState(() =>
    loadStoredValue(STORAGE_KEYS.language, "en")
  );
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedServices, setExpandedServices] = useState({});
  const [favoriteServices, setFavoriteServices] = useState(() =>
    loadStoredValue(STORAGE_KEYS.favorites, [])
  );
  const [eligibilityAnswers, setEligibilityAnswers] = useState({
    audience: "student",
    location: "any",
    income: "low",
    need: "scholarship"
  });
  const [checklistCategory, setChecklistCategory] = useState(() =>
    loadStoredValue(STORAGE_KEYS.checklist, "scholarship")
  );
  const [trackerItems, setTrackerItems] = useState(() =>
    loadStoredValue(STORAGE_KEYS.tracker, trackerSeeds)
  );

  const copy = translations[language] ?? translations.en;
  const localizedServices = services[language] ?? services.en;
  const localizedFeatures = featureCards[language] ?? featureCards.en;
  const localizedModules = learningModules[language] ?? learningModules.en;
  const localizedImpact = impactItems[language] ?? impactItems.en;
  const localizedNotices = notices[language] ?? notices.en;
  const currentChecklist = documentChecklists[checklistCategory];

  const query = searchQuery.trim().toLowerCase();
  const visibleServices = localizedServices.filter((service) => {
    const categoryMatch = filter === "all" || service.category === filter;

    if (!categoryMatch) {
      return false;
    }

    if (!query) {
      return true;
    }

    const searchBlob = [
      service.title,
      service.text,
      ...(service.details ?? []),
      ...(service.eligibility ?? []),
      ...(service.schemeLinks?.map((item) => item.label) ?? []),
      ...(service.latestUpdates?.map((item) => item.text) ?? [])
    ]
      .join(" ")
      .toLowerCase();

    return searchBlob.includes(query);
  });

  const favoriteCards = localizedServices.filter((service) =>
    favoriteServices.includes(service.title)
  );

  const eligibilityMatches = eligibilityRecommendations.filter((item) => {
    const audienceMatch =
      item.audience === "all" || item.audience === eligibilityAnswers.audience;
    const locationMatch =
      item.location === "any" || item.location === eligibilityAnswers.location;
    const incomeMatch = item.income === "any" || item.income === eligibilityAnswers.income;
    const needMatch = item.need === eligibilityAnswers.need;

    return audienceMatch && locationMatch && incomeMatch && needMatch;
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size-base", `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", isHighContrast);
    return () => document.body.classList.remove("high-contrast");
  }, [isHighContrast]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEYS.language, JSON.stringify(language));
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoriteServices));
    }
  }, [favoriteServices]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEYS.tracker, JSON.stringify(trackerItems));
    }
  }, [trackerItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(checklistCategory));
    }
  }, [checklistCategory]);

  function handleLanguageChange(event) {
    const nextLanguage = event.target.value;
    startTransition(() => setLanguage(nextLanguage));
  }

  function updateFilter(event) {
    const nextValue = event.target.value;
    startTransition(() => setFilter(nextValue));
  }

  function updateSearchQuery(event) {
    startTransition(() => setSearchQuery(event.target.value));
  }

  function readSummary() {
    if (!("speechSynthesis" in window)) {
      window.alert("Text-to-speech is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(copy.heroText);
    utterance.lang =
      languageOptions.find((option) => option.value === language)?.speechLang ?? "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function toggleServiceDetails(title) {
    startTransition(() => {
      setExpandedServices((current) => ({
        ...current,
        [title]: !current[title]
      }));
    });
  }

  function toggleFavorite(title) {
    startTransition(() => {
      setFavoriteServices((current) =>
        current.includes(title)
          ? current.filter((item) => item !== title)
          : [...current, title]
      );
    });
  }

  function updateEligibilityAnswer(event) {
    const { name, value } = event.target;
    startTransition(() => {
      setEligibilityAnswers((current) => ({
        ...current,
        [name]: value
      }));
    });
  }

  function updateTrackerStatus(id, status) {
    startTransition(() => {
      setTrackerItems((current) =>
        current.map((item) => (item.id === id ? { ...item, status } : item))
      );
    });
  }

  function getToggleLabel(isExpanded) {
    if (language === "hi") {
      return isExpanded ? "विवरण छिपाएं" : "विवरण देखें";
    }

    return isExpanded ? "Hide Details" : "View Details";
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand-block">
          <div className="brand-badge">{copy.brandBadge}</div>
          <h1>JanConnect</h1>
          <p className="brand-copy">{copy.brandCopy}</p>
        </div>

        <div className="access-panel" aria-label="Accessibility controls">
          <label className="language-picker" htmlFor="language-select">
            <span>{copy.languageLabel}</span>
            <select
              id="language-select"
              className="language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button
            className="control-button"
            type="button"
            onClick={() => setFontSize((size) => Math.min(22, size + 1))}
          >
            A+
          </button>
          <button
            className="control-button"
            type="button"
            onClick={() => setFontSize((size) => Math.max(14, size - 1))}
          >
            A-
          </button>
          <button
            className="control-button"
            type="button"
            onClick={() => setIsHighContrast((value) => !value)}
          >
            {copy.highContrast}
          </button>
          <button className="control-button primary" type="button" onClick={readSummary}>
            {copy.readSummary}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.heroTitle}</h2>
            <p className="hero-text">{copy.heroText}</p>

            <div className="hero-actions">
              <a className="cta-button" href="#services">
                {copy.exploreServices}
              </a>
              <a className="ghost-button" href="#tools">
                Action Tools
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Platform highlights">
            {stats.map((stat) => (
              <div className="stat-row" key={stat.key}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{copy[stat.key]}</span>
              </div>
            ))}
          </aside>
        </section>

        <section className="feature-grid" aria-label="Key features">
          {localizedFeatures.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>

        <section id="services" className="services-section">
          <div className="section-heading">
            <p className="eyebrow">{copy.serviceEyebrow}</p>
            <h2>{copy.serviceTitle}</h2>
          </div>

          <div className="service-toolbar service-toolbar-extended">
            <label htmlFor="service-filter">{copy.filterLabel}</label>
            <select id="service-filter" value={filter} onChange={updateFilter}>
              <option value="all">{copy.all}</option>
              <option value="education">{copy.education}</option>
              <option value="governance">{copy.governance}</option>
              <option value="health">{copy.health}</option>
              <option value="community">{copy.community}</option>
            </select>
            <input
              className="search-input"
              type="search"
              placeholder="Search schemes, updates, and services"
              value={searchQuery}
              onChange={updateSearchQuery}
            />
          </div>

          {favoriteCards.length ? (
            <div className="favorites-panel">
              <div className="section-heading">
                <p className="eyebrow">Saved</p>
                <h3>Your bookmarked services</h3>
              </div>
              <div className="favorite-list">
                {favoriteCards.map((service) => (
                  <article className="favorite-card" key={service.title}>
                    <span className="pill">{service.pill}</span>
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                    <div className="favorite-actions">
                      <button
                        className="mini-link mini-link-button"
                        type="button"
                        onClick={() => toggleFavorite(service.title)}
                      >
                        Remove
                      </button>
                      {service.primaryAction ? (
                        <a
                          className="mini-link"
                          href={service.primaryAction.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="service-list">
            {visibleServices.map((service) => {
              const isFavorite = favoriteServices.includes(service.title);

              return (
                <article className="service-card" key={service.title}>
                  <div className="card-topbar">
                    <span className="pill">{service.pill}</span>
                    <button
                      className={`favorite-toggle ${isFavorite ? "favorite-toggle-active" : ""}`}
                      type="button"
                      onClick={() => toggleFavorite(service.title)}
                    >
                      {isFavorite ? "Saved" : "Save"}
                    </button>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  {service.latestUpdates?.[0] ? (
                    <div className="card-preview-update">
                      <span className="update-date">{service.latestUpdates[0].date}</span>
                      <p>{service.latestUpdates[0].text}</p>
                    </div>
                  ) : null}
                  {service.schemeLinks?.length ? (
                    <div className="card-preview-links">
                      {service.schemeLinks.slice(0, 3).map((scheme) => (
                        <a
                          key={scheme.href}
                          className="mini-link"
                          href={scheme.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {scheme.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                  <div className="service-actions">
                    <button
                      className="resource-link resource-button"
                      type="button"
                      onClick={() => toggleServiceDetails(service.title)}
                    >
                      {getToggleLabel(Boolean(expandedServices[service.title]))}
                    </button>
                    {service.primaryAction ? (
                      <a
                        className="resource-link resource-link-primary"
                        href={service.primaryAction.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {service.primaryAction.label}
                      </a>
                    ) : null}
                    {service.secondaryAction ? (
                      <a
                        className="resource-link"
                        href={service.secondaryAction.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {service.secondaryAction.label}
                      </a>
                    ) : null}
                  </div>

                  {expandedServices[service.title] ? (
                    <div className="service-expanded">
                      {service.eligibilityTitle ? (
                        <div className="detail-section">
                          <h4>{service.eligibilityTitle}</h4>
                          <ul className="detail-list">
                            {service.eligibility.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {service.details ? (
                        <div className="detail-section">
                          <h4>{copy.namedResourcesLabel ?? "Named Resources"}</h4>
                          <ul className="detail-list">
                            {service.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {service.schemeLinks ? (
                        <div className="detail-section">
                          <h4>{copy.schemeLinksLabel ?? "Helpful Government Schemes"}</h4>
                          <div className="resource-links">
                            {service.schemeLinks.map((scheme) => (
                              <a
                                key={scheme.href}
                                className="resource-link"
                                href={scheme.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {scheme.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {service.latestUpdates ? (
                        <div className="detail-section">
                          <h4>{copy.latestUpdatesLabel ?? "Latest Official Updates"}</h4>
                          <ul className="update-list">
                            {service.latestUpdates.map((update) => (
                              <li className="update-item" key={`${update.date}-${update.text}`}>
                                <span className="update-date">{update.date}</span>
                                <p>{update.text}</p>
                                {update.href ? (
                                  <a
                                    className="update-link"
                                    href={update.href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {copy.sourceLabel ?? "Official source"}
                                  </a>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                          {service.verifiedOn ? (
                            <p className="verified-note">
                              {(copy.verifiedOnLabel ?? "Verified on") + " "}
                              {service.verifiedOn}
                            </p>
                          ) : null}
                        </div>
                      ) : null}

                      {service.links ? (
                        <div className="resource-links">
                          {service.links.map((link) => (
                            <a
                              key={link.href}
                              className="resource-link"
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="learning-section">
          <div className="section-heading">
            <p className="eyebrow">{copy.learningEyebrow}</p>
            <h2>{copy.learningTitle}</h2>
          </div>

          <div className="module-grid">
            {localizedModules.map((module) => (
              <article className="module-card" key={module.title}>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="tools-section">
          <div className="section-heading">
            <p className="eyebrow">Action Tools</p>
            <h2>Check eligibility, prepare documents, and track progress</h2>
          </div>

          <div className="tool-grid">
            <article className="tool-card">
              <h3>Eligibility Checker</h3>
              <p>Answer a few quick questions to see the most relevant schemes and services.</p>
              <div className="checker-grid">
                {eligibilityQuestions.map((question) => (
                  <label className="field-group" key={question.name}>
                    <span>{question.label}</span>
                    <select
                      name={question.name}
                      value={eligibilityAnswers[question.name]}
                      onChange={updateEligibilityAnswer}
                    >
                      {question.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
              <div className="match-list">
                {eligibilityMatches.map((match) => (
                  <article className="match-card" key={match.title}>
                    <div className="match-header">
                      <span className="pill">{match.type}</span>
                      <a href={match.href} target="_blank" rel="noreferrer">
                        Open
                      </a>
                    </div>
                    <h4>{match.title}</h4>
                    <p>{match.reason}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="tool-card">
              <h3>Document Checklist</h3>
              <p>Choose a service type and review the most common documents before applying.</p>
              <div className="checklist-toolbar">
                {checklistOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`chip-button ${
                      checklistCategory === option.value ? "chip-button-active" : ""
                    }`}
                    type="button"
                    onClick={() => setChecklistCategory(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="checklist-panel">
                <h4>{currentChecklist.title}</h4>
                <ul className="detail-list">
                  {currentChecklist.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <article className="tracker-card">
            <div className="tracker-header">
              <div>
                <h3>Deadline and Status Tracker</h3>
                <p>Saved automatically in your browser, so your progress stays after refresh.</p>
              </div>
            </div>
            <div className="tracker-list">
              {trackerItems.map((item) => (
                <div className="tracker-item" key={item.id}>
                  <div>
                    <span className="pill">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p>{item.deadline}</p>
                  </div>
                  <label className="field-group tracker-select">
                    <span>Status</span>
                    <select
                      value={item.status}
                      onChange={(event) => updateTrackerStatus(item.id, event.target.value)}
                    >
                      <option value="Not started">Not started</option>
                      <option value="In progress">In progress</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </label>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="impact" className="impact-section">
          <div className="section-heading">
            <p className="eyebrow">{copy.impactEyebrow}</p>
            <h2>{copy.impactTitle}</h2>
          </div>

          <div className="impact-list">
            {localizedImpact.map((item) => (
              <div className="impact-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="community-section">
          <div className="section-heading">
            <p className="eyebrow">{copy.communityEyebrow}</p>
            <h2>{copy.communityTitle}</h2>
          </div>

          <div className="notice-board" role="list" aria-label="Community notice board">
            {localizedNotices.map((notice) => (
              <article className="notice-card" role="listitem" key={notice.title}>
                <p className="notice-tag">{notice.tag}</p>
                <h3>{notice.title}</h3>
                <p>{notice.text}</p>
                {notice.details ? (
                  <ul className="detail-list">
                    {notice.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{copy.footerText}</p>
      </footer>
    </>
  );
}

export default App;
