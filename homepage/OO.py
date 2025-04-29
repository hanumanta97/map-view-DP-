import fitz  # PyMuPDF

def replace_underlines_with_strikethrough(pdf_path, output_path):
    # Open the PDF
    pdf_document = fitz.open(pdf_path)
    
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        
        # Extract text and its bounding boxes
        text_instances = page.get_text("dict")['blocks']
        
        for block in text_instances:
            if block['type'] == 0:  # Text block
                for line in block['lines']:
                    for span in line['spans']:
                        text = span['text']
                        bbox = fitz.Rect(span['bbox'])  # Get bounding box of the text
                        
                        # Placeholder for underline detection
                        if is_underlined(text):  # This is a placeholder function
                            # Draw a strikethrough line
                            page.draw_line(
                                fitz.Point(bbox.x0, (bbox.y0 + bbox.y1) / 2),
                                fitz.Point(bbox.x1, (bbox.y0 + bbox.y1) / 2),
                                color=(1, 0, 0),  # Red color
                                width=1  # Line width
                            )
    
    # Save the modified PDF
    pdf_document.save(output_path)
    pdf_document.close()

def is_underlined(text):
    # Implement your underline detection logic here
    # For example, you might want to check text patterns or use OCR results
    # This is a placeholder example:
    return '_' in text

# Example usage
replace_underlines_with_strikethrough('example.pdf', 'output.pdf')
