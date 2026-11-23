# review checklist
## Before editing
- [ ] Read existing code and instructions; find reusable implementations.
- [ ] Identify requirements, invariants and smallest complete solution.
- [ ] Obtain approval for new dependencies, public API/schema changes, major refactors or architectural changes.
## After editing
- [ ] Cohesive responsibilities; abstractions justified; commands/queries separated.
- [ ] Modern TypeScript conventions, no any or unsafe shortcuts.
- [ ] Central utilities, source barrels, no cycles; review files over 300 lines.
- [ ] Correct layer errors; no redundant catches or duplicate logging.
- [ ] Preserve security, precision, atomicity and concurrency.
- [ ] Spanish behavioral tests, no mocks; contract tests as required.
- [ ] Execute affected tests; report skipped verification.
- [ ] Update documentation for relevant contract/behavior changes.
- [ ] Correct violations or request explicit exception.
Final response: brief changes, decisions, tests and limitations.
