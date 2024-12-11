const styles = `
.dark-theme .rsVirtualTableStyle_rsTableVirtual-oHCi0ZaX.rsTableVirtualCell.column_CoordinateSource.striped {
  background-color: #2B292E !important;
  border-bottom-width: 0px !important;
}

.dark-theme .rsVirtualTableStyle_rsTableVirtual-oHCi0ZaX.rsTableVirtualCell.column_CoordinateSource.unstriped {
  background: #171817 !important;
  border-bottom-width: 0px !important;
}
`;

// Create a <style> element
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.textContent = styles;

// Append the <style> element to the <head>
document.head.appendChild(styleElement);


document.querySelectorAll('[class*="row"]').forEach(element => {
  // Find class starting with "row" in the list of class names
  const rowClass = [...element.classList].find(cls => cls.startsWith('row'));
  if (rowClass) {
    // Extract the numeric part of the class name after "row" (up to 5 digits)
    const match = rowClass.match(/^row(\d{1,5})$/);
    if (match) {
      const number = parseInt(match[1], 10); // Get the number part
      if (number % 2 !== 0) { // Check if the number is odd
        element.classList.add('striped'); // Add the "striped" class for styling
      } else {
        element.classList.add('unstriped');          
      }
    }
  }
});
