<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" version="1.1.0" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <se:Name>Cadastre_Boundary_R1</se:Name>
    <UserStyle>
      <se:Name>Cadastre_Boundary_R1</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Single symbol</se:Name>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Bhayander</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Mira</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Penkarpada</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Mahajanwadi</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Navghar</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Murdhe</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Khari</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Raimurdhe</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Goddev</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Or>
          </ogc:Filter>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>sur_new</ogc:PropertyName> (<ogc:PropertyName>sur_old</ogc:PropertyName>)
              <!--SE Export for "sur_new" || '\n' || '(' || "sur_old" || ')' || '\n' || "Name" not implemented yet-->
              
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Arial</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>1</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Fill>
              <se:SvgParameter name="fill">#000000</se:SvgParameter>
            </se:Fill>
          </se:TextSymbolizer>
        </se:Rule>
        <se:Rule>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:Not>
              <ogc:Or>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Bhayander</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Mira</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Penkarpada</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Mahajanwadi</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Navghar</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Murdhe</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Khari</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Raimurdhe</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Goddev</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Modification</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                  <ogc:Literal>Modification_1line</ogc:Literal>
                </ogc:PropertyIsEqualTo>
              </ogc:Or>
            </ogc:Not>
          </ogc:Filter>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>sur_old</ogc:PropertyName>
              <!--SE Export for "sur_old" not implemented yet-->
              
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Arial</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>1</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Fill>
              <se:SvgParameter name="fill">#000000</se:SvgParameter>
            </se:Fill>
          </se:TextSymbolizer>
        </se:Rule>
        <se:Rule>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>Vill_Name</ogc:PropertyName>
              <ogc:Literal>Modification</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>sur_new</ogc:PropertyName> (<ogc:PropertyName>sur_old</ogc:PropertyName>)
              <!--SE Export for "sur_new" || '\n' || '(' || "sur_old" || ')' not implemented yet-->
              
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Arial</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>1</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Fill>
              <se:SvgParameter name="fill">#000000</se:SvgParameter>
            </se:Fill>
            <se:Graphic>
              <se:Mark>
                <se:OnlineResource xlink:href="ttf://Century" xlink:type="simple"/>
                <se:Format>ttf</se:Format>
                <se:MarkIndex>95</se:MarkIndex>
                <se:Fill>
                  <se:SvgParameter name="fill">#0070ff</se:SvgParameter>
                </se:Fill>
              </se:Mark>
              <se:Size>60</se:Size>
            </se:Graphic>
          </se:TextSymbolizer>
        </se:Rule>
        <se:Rule>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>Vill_Name</ogc:PropertyName>
              <ogc:Literal>Modification_1line</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>sur_new</ogc:PropertyName> (<ogc:PropertyName>sur_old</ogc:PropertyName>)
              <!--SE Export for "sur_new" || '\n' || '(' || "sur_old" || ')' not implemented yet-->
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Arial</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>1</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Fill>
              <se:SvgParameter name="fill">#000000</se:SvgParameter>
            </se:Fill>
            <se:Graphic>
              <se:Mark>
                <se:OnlineResource xlink:href="ttf://Century" xlink:type="simple"/>
                <se:Format>ttf</se:Format>
                <se:MarkIndex>95</se:MarkIndex>
                <se:Fill>
                  <se:SvgParameter name="fill">#0070ff</se:SvgParameter>
                </se:Fill>
              </se:Mark>
              <se:Size>60</se:Size>
            </se:Graphic>
          </se:TextSymbolizer>
        </se:Rule>
        <se:Rule>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Modification</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Vill_Name</ogc:PropertyName>
                <ogc:Literal>Modification_1line</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Or>
          </ogc:Filter>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>N_Label_Ne</ogc:PropertyName> (<ogc:PropertyName>N_Label_Ol</ogc:PropertyName>)
              <!--SE Export for "N_Label_Ne" || '\n' || '(' || "N_Label_Ol" || ')' not implemented yet-->
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Arial</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>1</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Fill>
              <se:SvgParameter name="fill">#0070ff</se:SvgParameter>
            </se:Fill>
          </se:TextSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
