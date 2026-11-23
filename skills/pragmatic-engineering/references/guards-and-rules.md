# Guards, rules, specifications and policies

## Intent
Prefer readable business flows with named, reusable validation semantics. Reduce repeated or distracting inline conditionals, not the number of if tokens at any cost. Preserve fail-fast behavior and all invariants.

## Choose the right abstraction
- Guard: enforces a precondition, returns void on success and throws a typed layer-specific error on failure.
- Rule: named business predicate, normally pure, deterministic and boolean-returning. No mutation, hidden repository calls, or HTTP dependencies.
- Specification: composable predicate over a candidate; use when AND/OR/NOT composition or repeated selection genuinely helps. Do not require a base hierarchy for simple predicates.
- Policy: encapsulates a business decision or calculation, possibly returning a value or decision rather than a boolean.
- Validator: checks boundary input shape and constraints, using existing schema tooling when available. It never replaces domain invariants.

Prefer classical object-oriented implementations for justified patterns and cohesive static classes for related stateless helpers. Standalone helpers use arrow functions. Avoid one class per rule. No mandatory Rule interface, generic rule engine, registry, chain of responsibility or separate Guard/Rules pair for every concept.

## Extraction criteria
Extract repeated business conditions or substantial named checks that obscure the main operation. Keep a simple one-off if or early return local. Use a guard directly when no independent predicate consumer exists; add a Rules class when predicates are reused or independently meaningful. Search existing rules first. Never duplicate a predicate between rule and guard.

## Example (illustrative, assumes existing domain error classes)
stockRules.ts:
```ts
export default class StockRules {
  static isValidQuantity(quantity: number): boolean {
    return Number.isFinite(quantity) && quantity > 0;
  }
  static hasSufficientStock(available: number, requested: number): boolean {
    return available >= requested;
  }
}
```
stockGuard.ts:
```ts
import StockRules from "./stockRules.js";
import { InvalidQuantityError, InsufficientStockError } from "./stockErrors.js";
export default class StockGuard {
  static validQuantity(quantity: number): void {
    if (!StockRules.isValidQuantity(quantity)) {
      throw new InvalidQuantityError(quantity);
    }
  }
  static sufficientStock(available: number, requested: number): void {
    if (!StockRules.hasSufficientStock(available, requested)) {
      throw new InsufficientStockError(available, requested);
    }
  }
}
```
stock.ts operation:
```ts
remove(quantity: number): void {
  StockGuard.validQuantity(quantity);
  StockGuard.sufficientStock(this._quantity, quantity);
  this._quantity -= quantity;
}
```
Assume construction and other mutations already protect valid stock state. Quantity units, precision and integer constraints depend on domain requirements.

## Layer boundaries
Domain owns intrinsic invariants; entities invoke guards before mutation, including construction. Value Objects own their validation. Application owns repository-dependent preconditions, authorization orchestration and existence checks. Infrastructure enforces persistence constraints; uniqueness prechecks alone do not prevent races. Use database constraints and transactions/locking as appropriate. Presentation validates request shape and translates errors. Never move pure domain logic into infrastructure or hide network I/O in a rule.

## File organization
Keep productGuard.ts, productRules.ts, productErrors.ts beside product.ts when justified. Use index.ts in source directories, avoiding circular imports. Centralize only domain-neutral helpers in shared/guards/guard.ts when genuinely useful. A generic Guard.against(condition, errorFactory) is optional, not the default way to conceal conditionals. No empty folders.

## Verification
Test rule boundaries, typed errors and representative entity invariants, including unchanged state after rejection. Use Spanish test names, Vitest preferably, no mocks, real implementations or functional fakes. Run affected tests. Preserve public error codes and security/atomicity guarantees.
