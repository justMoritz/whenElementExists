# When Element Exists

Function that listen until jQuery selector exists, then runs callback function.

It's hacky, but useful when working with 3rd party code you don't have control over but the client insists you modify anyway. As these things go, use with caution, mileage may vary, etc. pp.

### Usage Example

  whenElementExists( $('.third-party-widget'), function(){
    $('.third-party-widget').wrap( "<div class='you-are-mine-now'></div>" );
  });