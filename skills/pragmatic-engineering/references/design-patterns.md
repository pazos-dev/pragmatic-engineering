# design patterns
Prefer classical object-oriented implementations when justified. Prefer composition. Justify new patterns internally and report significant decisions; ask about architectural changes.
- Factory: complex construction or selection of confirmed implementations; not a wrapper around new.
- Strategy: interchangeable confirmed algorithms.
- Facade: preferred for clear public APIs of engines/libraries, without absorbing business logic.
- Singleton: adapt to resource lifetime; not global mutable business state.
- Adapter: translate incompatible contracts at real boundaries.
- Observer: independent reactions requiring decoupling; not transactional orchestration.
- Repository: meaningful persistence boundary.
- Unit of Work: atomic coordination.
- Decorator: independent added behavior.
- Builder: genuinely multi-step construction.
- Specification: reusable composable rules.
- State: complex transitions.
- Command Bus: only when dispatch requirements justify it.
