export default {
  selectors: {
    descendants: "*",
    "descendant-combinator": " ",
    "child-combinator": ">",
    "general-sibling-combinator": "~",
    "adjacent-sibling-combinator": "+",
  },
  //selectors should go after
  //dynamic selectors should go before the className but after the themes
  dynamicPreSelectors: {
    has: ".",
    "where-ancestor": " ", // div .ancestor:div.bg:red{} +++++++++++++
    "where-parent": ">", // div > .parent:div.bg:red{} ++++++
    "where-precedes": "~", // div ~ .previous:div.bg:red{}
    "where-previous": "+", // div + .follows:div.bg:red{} ++++++
  },
  // pre selects where
  // post selects the stated
  dynamicPostSelectors: {
    descendant: " ", // .descendant:div.bg:red{} div ++++++++++++++
    child: ">", // .parent:div.bg:red{} > div ++++++++
    following: "~", // .next:div.bg:red{} ~ div
    next: "+", // .follows:div.bg:red{} + div +++++++
    // selects the right one
  },
};
/**
 * * selects all descendants
 * > Selects elements where parent is div
 * + Selects the first element that is placed after div
 * ~ selects all elements that precede the div, so like all children
 * " " selects all elements that are inside div
 */
